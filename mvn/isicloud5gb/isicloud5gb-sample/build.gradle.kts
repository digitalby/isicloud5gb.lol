plugins {
    kotlin("jvm") version "2.1.20"
    application
}

repositories {
    mavenCentral()
}

kotlin {
    jvmToolchain(8)
}

dependencies {
    implementation(project(":"))
}

application {
    mainClass = "lol.isicloud5gb.sample.MainKt"
}
