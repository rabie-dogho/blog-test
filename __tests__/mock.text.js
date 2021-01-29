describe('mocking data', () => {
  it('mocks a function', async () => {
    const fetchUsers = jest.fn().mockResolvedValue(['Rabie', 'Slaiman']);
    fetchUsers();
    expect(fetchUsers).toHaveBeenCalled();
    fetchUsers();
    expect(fetchUsers).toHaveBeenCalledTimes(2);
    const users = await fetchUsers();
    expect(users).toContain('Rabie');
  });
});
