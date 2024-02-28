const hasMeeting = false;

const meeting = new Promise((resolve,reject)=>{
    if(!hasMeeting){
        const meetingDetails = {
            name:'Technical Meeting',
            location:'Teams',
            time:'10 PM'
        };
        resolve(meetingDetails);
    }
    else{
        reject(new Error('Meeting Already Schedules'))
    }
});

    meeting
        .then((res)=>{
            console.log(JSON.stringify(res));
        })
        .catch((err)=>{
            console.log(err.message);
        })