export default () => {
  return async (ctx, next) => {
    if (ctx.url === '/') {
      ctx.redirect('/admin');
      return;
    }
    await next();
  };
};
