import { TUser } from "@/types/User";
import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import { useSocket } from "./../composables/useSocket";

export const useTimeScreenStore = defineStore("timeScreen", () => {
    const users = ref<TUser[]>([]);
    const socket = useSocket();

    const addUser = (user: TUser) => {
        if (users.value.find(_user => _user.id === user.id)) return;
        users.value.push(user);
        socket.addUser(user);
    }

    const deleteUser = (id_user: string) => {
        users.value = users.value.filter(user => user.id !== id_user);
        socket.deleteUser(id_user);
    }

    const updateUser = (user: TUser) => {
        users.value = users.value.map(_user => {
            if (_user.id === user.id) return user;
            return _user;
        });
        socket.updateUser(user);
    }

    onMounted(() => {
        socket.socket.value?.on('addUser', (user: TUser) => {
            if (users.value.find(_user => _user.id === user.id)) return;
            users.value.push(user)
        });

        socket.socket.value?.on('deleteUser', (id_user: string) => {
            console.log(id_user)
            users.value = users.value.filter(user => user.id !== id_user);
        });
        
        socket.socket.value?.on('updateUser', (user: TUser) => {
            users.value = users.value.map(_user => {
                if (_user.id === user.id) return user;
                return _user;
            });
        });
    })


    // methods


    return {
        users,
        addUser,
        deleteUser,
        updateUser
    }
}, {
    persist: true
})