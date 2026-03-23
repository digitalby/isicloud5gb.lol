package lol.isicloud5gb.sample

import lol.isicloud5gb.isICloud5GB

fun main() {
    val answer = isICloud5GB()

    println("Is iCloud's free tier still 5GB? ${if (answer) "Yes." else "No."}")

    if (answer) {
        println("It is. It always has been.")
    }
}
