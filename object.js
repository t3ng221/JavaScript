const student ={
    id: 123,
    name: 'siam',
    class:'seven',
    color:'red',
    read: function(){
        console.log('Student is reading')
    },
    work:function(){
        console.log('Srudent is working')
    },
    going:function(){
        console.log('Student is running')
    }
}
console.log(student.color);
student.work();