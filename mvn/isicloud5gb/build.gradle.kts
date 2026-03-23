plugins {
    kotlin("jvm") version "2.1.20"
    `maven-publish`
    signing
}

group = "lol.isicloud5gb"
version = "1.0.0"

repositories {
    mavenCentral()
}

dependencies {
    testImplementation("org.junit.jupiter:junit-jupiter:5.11.0")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}

tasks.test {
    useJUnitPlatform()
}

kotlin {
    jvmToolchain(8)
}

java {
    withSourcesJar()
    withJavadocJar()
}

publishing {
    publications {
        create<MavenPublication>("mavenJava") {
            from(components["java"])

            pom {
                name = "IsICloud5GB"
                description = "Is iCloud's free tier still 5GB? Yes. This package programmatically confirms what we all already know."
                url = "https://isicloud5gb.lol"

                licenses {
                    license {
                        name = "MIT License"
                        url = "https://opensource.org/licenses/MIT"
                    }
                }

                developers {
                    developer {
                        id = "digitalby"
                        name = "Yury Vashchylau"
                        url = "https://github.com/digitalby"
                    }
                }

                scm {
                    connection = "scm:git:git://github.com/digitalby/isicloud5gb.lol.git"
                    developerConnection = "scm:git:ssh://github.com/digitalby/isicloud5gb.lol.git"
                    url = "https://github.com/digitalby/isicloud5gb.lol"
                }
            }
        }
    }

    repositories {
        maven {
            name = "OSSRH"
            val releasesUrl = uri("https://s01.oss.sonatype.org/service/local/staging/deploy/maven2/")
            val snapshotsUrl = uri("https://s01.oss.sonatype.org/content/repositories/snapshots/")
            url = if (version.toString().endsWith("SNAPSHOT")) snapshotsUrl else releasesUrl
            credentials {
                username = providers.gradleProperty("ossrhUsername").orNull
                    ?: System.getenv("OSSRH_USERNAME")
                password = providers.gradleProperty("ossrhPassword").orNull
                    ?: System.getenv("OSSRH_PASSWORD")
            }
        }
    }
}

signing {
    val signingKey = providers.gradleProperty("signingKey").orNull
        ?: System.getenv("SIGNING_KEY")
    val signingPassword = providers.gradleProperty("signingPassword").orNull
        ?: System.getenv("SIGNING_PASSWORD")
    if (signingKey != null && signingPassword != null) {
        useInMemoryPgpKeys(signingKey, signingPassword)
    }
    sign(publishing.publications["mavenJava"])
}
