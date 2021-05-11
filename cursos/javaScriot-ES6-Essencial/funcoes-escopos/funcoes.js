function init(){
    const exempo ="José Pedro Daniel Dembo"

    return function (){
        console.log(`1 - retorana a: ${exempo}`)
    }

    return function (){
        console.log(`2 - retorna a: ${exempo}`)
    }

    return function (){
        console.log(`3 - retorna a : ${exempo}`)
    }
}

init()()