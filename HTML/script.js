function greet1(time, msg) {
  let promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve(msg)
    }, time)
  })
  return promise
}

function greet2(time, msg) {
  let promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve(msg)
    }, time)
  })
  return promise
}

function greet3(time, msg) {
  let promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve(msg)
    }, time)
  })
  return promise
}

async function greetingMsg() {
  let msg = await greet1(1000, "Hello Runu")
  console.log(msg)

  let msg1 = await greet2(1000, "Hello Chinu")
  console.log(msg1)

  let msg2 = await greet3(1000, "Hello Shubha")
  console.log(msg2)

}

greetingMsg()