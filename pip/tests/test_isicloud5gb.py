from isicloud5gb import is_icloud_5gb


def test_is_icloud_5gb_returns_true():
    assert is_icloud_5gb() is True


def test_is_icloud_5gb_returns_bool():
    result = is_icloud_5gb()
    assert isinstance(result, bool)


def test_is_icloud_5gb_is_idempotent():
    # No matter how many times you ask, the answer does not change.
    results = [is_icloud_5gb() for _ in range(5)]
    assert all(results)


def test_is_icloud_5gb_is_not_false():
    assert not (not is_icloud_5gb())
