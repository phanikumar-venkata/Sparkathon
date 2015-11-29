PublicLayout = React.createClass({

  displayName: 'PublicLayout',

  render() {
    return <div>
      <div>
        {this.props.content}
      </div>
      <div className="eq-m-footer">
        <p>&copy; EQUINIX</p>
      </div>
    </div>
  }
});

