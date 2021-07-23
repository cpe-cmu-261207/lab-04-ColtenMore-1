/* Your code here */
let count = 0
let newE
const input = document.querySelector('input')
input.addEventListener('input', ev=>{
    newE = ev.target.value
})

const main = document.createElement('div')
main.setAttribute('id', 'todos')

const done = document.createElement('div')
done.setAttribute('id', 'todone')

const btn = document.querySelector('button')
btn.addEventListener('click', ev=>{
    if(newE.length == 0){
        alert('Task cannot be empty')
    }else{
        const spanTask = document.createElement('span')
        const span = document.createElement('span')
        span.setAttribute('id', count)
        
        span.innerHTML = newE
        spanTask.append(span)

        const doneBtn = document.createElement('button')
        doneBtn.setAttribute('id', count)
        
        const delBtn = document.createElement('button')
        delBtn.setAttribute('id', count)
        
        doneBtn.innerHTML = 'done'
        delBtn.innerHTML = 'delete'
        
        doneBtn.addEventListener('click', ()=>{
            const spanDone = document.createElement('span')
            
            spanDone.append(span)
            spanDone.append(document.createElement('br'))
            done.insertBefore(spanDone, done.childNodes[0])
            
            main.removeChild(spanTask)
        })
        
        delBtn.addEventListener('click', ()=>{
            main.removeChild(spanTask)
        })
        
        spanTask.append(doneBtn)
        spanTask.append(delBtn)
        spanTask.append(document.createElement('br'))
        main.insertBefore(spanTask, main.childNodes[0])
        count++
    }
})

document.body.append(main)
document.body.append(done)
