var my_fs=response;
console.log(my_fs+" jsx file");
var CreateFurSealItem = React.createClass({
    propTypes: {
        data: React.PropTypes.shape({
            id:React.PropTypes.number.isRequired,
            name: React.PropTypes.string.isRequired,
            country: React.PropTypes.string.isRequired
        })
    },
    render: function () {
        var name = this.props.data.name,
            id = this.props.data.id,
            country = this.props.data.country;

        return (
            <div id="furSealItem" className="item  col-xs-4 col-lg-4">
                <p className="invisible">{id}:</p>
                <div className="thumbnail">
                    <img className="group list-group-image" src="../../assets/img/mimimi3.jpg"
                         alt="http://placehold.it/400x250/000/fff"/>
                    <div className="caption">
                        <h2 className="group inner list-group-item-heading">{name}:</h2>
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <p className="lead">{country}:</p>
                            </div>
                            <div className="col-xs-3 col-md-2">
                                <a className="btn btn-success" href="list_one.html">Choose</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
});
var Content = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired
    },
    render: function () {
        var data = this.props.data;
        var newsTemplate;

        if (data.length > 0) {
            newsTemplate = data.map(function (item, index) {
                return (
                    <div key={index}>
                        <CreateFurSealItem data={item}/>
                    </div>
                )
            })
        } else {
            newsTemplate = <p>К сожалению морских котиков пока нет</p>
        }

        return (
            <div className='news'>
                {newsTemplate}
            </div>
        );
    }
});

var App = React.createClass({
    render: function () {
        return (
            <div className='app'>
                <Content data={my_fs}/>
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('products')
);