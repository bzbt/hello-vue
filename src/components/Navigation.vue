<script>
  const Nav = {
    template: '<nav>' +
    '<ul>' +
    '<li><a href="#/">Start</a></li>' +
    '<li><a href="#/old-index">Static</a></li>' +
    '</ul>' +
    '</nav>'
  }
  export default Nav
</script>

<style>
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  nav ul {
    display: flex;
    flex-direction: row !important;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }

  nav ul li {
    margin-right: 5px;
  }

  nav ul li:last-child {
    margin-right: 0;
  }

  nav ul li a {
    border: 1px solid gainsboro;
    padding: 6px 4px;
    color: #42b983;
    text-decoration: none;
  }
</style>
