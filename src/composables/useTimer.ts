import { onMounted, onUnmounted, ref } from 'vue';

interface IProps {
    startTime: Date | string
}

const useTimer = ({
    startTime
}: IProps) => {
    const countdown = ref<number>(0);
    
    const updateCountdown = () => {
        const st = new Date(startTime);
        const interval = setInterval(() => {
            const currentTime = new Date();
            const timeDifference = Math.floor((currentTime.getTime() - st.getTime()) / 1000);
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