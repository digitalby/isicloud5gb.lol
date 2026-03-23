package lol.isicloud5gb

import org.junit.jupiter.api.Assertions.assertFalse
import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.Test

class IsICloud5GBTest {
    @Test
    fun `isICloud5GB returns true`() {
        assertTrue(isICloud5GB())
    }

    @Test
    fun `isICloud5GB returns a Boolean`() {
        val result: Boolean = isICloud5GB()
        assertTrue(result)
    }

    @Test
    fun `isICloud5GB is idempotent`() {
        // No matter how many times you ask, the answer does not change.
        val results = (0..<5).map { isICloud5GB() }
        assertTrue(results.all { it })
    }

    @Test
    fun `isICloud5GB is not false`() {
        assertFalse(!isICloud5GB())
    }
}
