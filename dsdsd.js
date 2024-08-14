var deleteDuplicates = function(head) {
    for (let i = 0; i <= head.length; i++){
        for (let j = 1; j <= head.length; j++){
            if (head[i] === head[j]){
                console.log(head[i], head[j]);
                return head.splice(j, 1)
            }
        }
    }
}
console.log(deleteDuplicates([1, 1, 2]))