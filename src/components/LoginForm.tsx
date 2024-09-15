const LoginForm = () => {
  return (
    <form>
      <button
        className='bg-pink-400 text-white p-2 rounded-md m-1 text-lg'
        type='submit'
        name='action'
        value='google'
      >
        Sign In With Google
      </button>
      <button
        className='bg-black text-white p-2 rounded-md m-1 text-lg'
        type='submit'
        name='action'
        value='github'
      >
        Sign In With Github
      </button>
    </form>
  );
};

export default LoginForm;
