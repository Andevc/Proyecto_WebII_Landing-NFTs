import {useEffect, useState} from 'react';
import moment from 'moment';


export default function CountDown({ targetDays }){
    const targetDate = moment().add(targetDays, 'days');
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function calculateTimeRemaining() {
        const now = moment();
        const diff = targetDate.diff(now, 'milliseconds');

        if (diff <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const duration = moment.duration(diff);
        return {
            days: duration.days(),
            hours: duration.hours(),
            minutes: duration.minutes(),
            seconds: duration.seconds(),
        };
    }

    return (
        <p className="p-text-primary">
            {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
        </p>
    );
};
