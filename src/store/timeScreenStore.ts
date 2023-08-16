import { TUser } from "@/types/User";
import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import { useSocket } from "./../composables/useSocket";
import { USERS } from "./../utils/data/user";

import { EActivityType, TActivity } from "./../types/Activity";
import { EOrderSheetState } from "./../types/OrderSheet";

export const useTimeScreenStore = defineStore("timeScreen", () => {
    const users = ref<TUser[]>([]);
    const socket = useSocket();

    const addList = () => {
        const activity: TActivity = {
            id: Math.round(Math.random()*10).toString(),
            activityType: EActivityType.ORDER_SHEET,
            startDate: new Date(),
            orderSheet: {
                id:  Math.round(Math.random()*10).toString(),
                name: "Test",
                state: EOrderSheetState.WORKING
            }
        }

        const firstUser = users.value.find(user => !user.activity);
        if (!firstUser) return;

        const updatedUser = { ...firstUser, activity: activity }   
        updateUser(updatedUser);     
    }

    const addActivity = (activityType: EActivityType, id_user: string) => {
        const activity: TActivity = {
            id: Math.round(Math.random()*10).toString(),
            activityType: activityType,
            startDate: new Date(),
        }

        const user = users.value.find(_user => _user.id === id_user);
        if (!user) return;
        
        const updatedUser = { ...user, activity: activity }   
        updateUser(updatedUser);   
    }

    const completeActivity = (id_user: string) => {
        const user = users.value.find(_user => _user.id === id_user);
        if (!user) return;
        updateUser({...user, activity: undefined});
    }   

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
        
        socket.socket.value?.on('editUser', (user: TUser) => {
            console.log("cau")
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
        updateUser,
        addList,
        completeActivity,
        addActivity
    }
}, {
    persist: true
})