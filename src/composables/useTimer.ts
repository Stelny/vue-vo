import { onMounted, onUnmounted, ref } from 'vue';

interface IProps {
    startTime: Date
}

const useTimer = ({
    startTime
}: IProps) => {
    const countdown = ref<number>(0);
    
    const updateCountdown = () => {
        const interval = setInterval(() => {
            const currentTime = new Date();
            const timeDifference = Math.floor((currentTime.getTime() - startTime.getTime()) / 1000);
            countdown.value = timeDifference;
        }, 1000);
        
        onUnmounted(() => {
            clearInterval(interval);
        });
    };
    
    onMounted(() => {
        updateCountdown();
    });

    return {
        countdown
    }

}

export default useTimer;