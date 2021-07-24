/* Your code here */
let count = 0
let newE
const input = document.querySelector('input')
input.addEventListener('input', ev=>{
    newE = ev.target.value
})

const main = document.createElement('div')
main.setAttribute('id', 'todos')
main.setAttribute('class', 'box-border border-8 md:box-content space-x-4 divide-y divide-light-blue-400')

const done = document.createElement('div')
done.setAttribute('id', 'todone')
done.setAttribute('class', 'text-2xl text-red-400 m-6 ')

const btn = document.querySelector('button')
btn.addEventListener('click', ev=>{
    if(newE.length == 0){
        alert('Task cannot be empty')
    }else{
        const spanTask = document.createElement('span')
        spanTask.setAttribute('class', 'text-xl p-4')
        
        const span = document.createElement('span')
        span.setAttribute('class', 'text-2xl text-blue-500')
        span.setAttribute('id', count)
        
        span.innerHTML = newE
        spanTask.append(span)

        const doneBtn = document.createElement('button')
        doneBtn.setAttribute('id', count)
        doneBtn.setAttribute('class', 'bg-green-400 mt-6 mb-6 ml-6 box-border h-10 w-20 border-4 border-green-400')
        
        const delBtn = document.createElement('button')
        delBtn.setAttribute('id', count)
        delBtn.setAttribute('class', 'bg-red-500 ml-6 box-border h-10 w-20 border-4 border-red-500')
        
        doneBtn.innerHTML = 'done'
        delBtn.innerHTML = 'delete'
        
        doneBtn.addEventListener('click', ()=>{
            const spanDone = document.createElement('span')
            span.setAttribute('class', 'text-xl text-red-500 mr-14 line-through')
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
