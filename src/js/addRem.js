import { reactive } from 'vue'
// 添加
function useAddStudent(state) {
    let state2 = reactive({
        stu: {
            id: '',
            name: '',
            age: ''
        }
    })
    function addStu(e) {
        e.preventDefault()
        console.log(state2.stu)
        let stu2 = Object.assign({}, state2.stu)
        state.stus.push(stu2)
        state2.stu.id = ''
        state2.stu.name = ''
        state2.stu.age = ''
    }
    return { state2, addStu }
}
// 移除
function useRemoveStudent() {
    let state = reactive({
        stus: [
            {id:1, name: 'zs', age: 10},
            {id:2, name: 'ls', age: 20},
            {id:3, name: 'ww', age: 30}
        ]
    })
    function removeItem(index) {
        console.log(index)
        state.stus = state.stus.filter((value, idx) => idx !== index)
    }
    return { state, removeItem }
}
export {
    useAddStudent, useRemoveStudent
}