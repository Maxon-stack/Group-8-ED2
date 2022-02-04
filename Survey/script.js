function SaveAnswer(num){
  num = parseInt(num)
  id = `text${num}`
  answer = document.getElementById(id)
  console.log(answer.value)

}
function DeleteAnswer(num){
  num = parseInt(num)
  id = `text${num}`
  answer = document.getElementById(id)
  answer.value = null

  console.log(answer.value)


}