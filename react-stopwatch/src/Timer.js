import React, { Component } from 'react';
import styled from 'styled-components';

class Timer extends Component {
    constructor() {
        super();
        this.state = {
            hours: '00',
            minutes: '00',
            seconds : '00',
            time: 0
        };
    }

    start() {
        this.timer = setInterval(() => this.update(), 1000);
    }

    stop() {
        clearInterval(this.timer);
    }

    reset() {
        this.setState({
            hours: '00',
            minutes: '00',
            seconds: '00',
            time: 0
        });
    }

    update() {
        const time = this.state.time + 1;
        const hours = parseInt(time / 60/ 60,10);
        const minutes = parseInt(time / 60% 60,10) ;
        const seconds = parseInt(time % 60,10);
        this.setState({
            hours: this.toText(hours),
            minutes: this.toText(minutes),
            seconds: this.toText(seconds),
            time: time
        });
    }

    toText(time){
        return ('00' + time).slice(-2);
    }

    render() {
        return(
            <div>
                <TimerText>{this.state.hours}</TimerText>
                <TimerText>:</TimerText>
                <TimerText>{this.state.minutes}</TimerText>
                <TimerText>:</TimerText>
                <TimerText>{this.state.seconds}</TimerText>
            </div>
        );
    }
}

export default Timer;
const TimerText = styled.span`
    font-size: 200px;
    color: #333;
`