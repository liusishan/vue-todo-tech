import '../assets/styles/footer.styl'

export default {
  data() {
    return {
      auther: 'Easy'
    }
  },
  render() {

    return (
      <div id="footer">
        <span>Written by {this.auther}</span>
      </div>
    )
  }
}