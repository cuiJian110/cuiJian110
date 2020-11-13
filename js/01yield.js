function* baum() {
    yield delay(300).then(() => console.log(1))
    yield console.log(2)
    yield delay(300).then(() => console.log(3))
    yield console.log(4)
}
const b = baum()
b.next()
b.next()
b.next()
b.next()