import { ref, onMounted } from 'vue';
import { io, Socket } from 'socket.io-client';
import { TUser } from '@/types/User';

export function useSocket() {
  const socket = ref<Socket | null>(null);
  const isConnected = ref(false);

  const connectToSocket = () => {
    if (socket.value) return;

    socket.value = io('http://localhost:3000');

    socket.value.on('connect', () => {
      isConnected.value = true;
    });

    socket.value.on('disconnect', () => {
      isConnected.value = false;
    });

  };

  const addUser = (user: TUser) => {
    if (!socket.value) return;
    socket.value.emit("addUser", user);
  }

  const deleteUser = (id_user: string) => {
    if (!socket.value) return;
    socket.value.emit("deleteUser", id_user);
  }
  
  const updateUser = (user: TUser) => {
    if (!socket.value) return;
    socket.value.emit("editUser", user);
  }

  onMounted(() => {
    connectToSocket()
  })

  return {
    socket,
    isConnected,
    connectToSocket,
    addUser,
    deleteUser,
    updateUser
  };
}