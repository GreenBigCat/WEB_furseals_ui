var DrawPage = function () {
    var my_fs = response;
    var CreateFurSealItem = React.createClass({
        propTypes: {
            data: React.PropTypes.shape({
                id: React.PropTypes.number.isRequired,
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
                    <p className="invisible">{id}</p>
                    <div className="thumbnail">
                        <img className="group list-group-image" src="../../assets/img/mimimi3.jpg"
                             alt="http://placehold.it/400x250/000/fff"/>
                        <div className="caption">
                            <h2 className="group inner list-group-item-heading">{name}</h2>
                            <div className="row">
                                <div className="col-xs-12 col-md-6">
                                    <p className="lead">{country}</p>
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
            var fsTemplate;

            if (data.length > 0) {
                fsTemplate = data.map(function (item, index) {
                    return (
                        <div key={index}>
                            <CreateFurSealItem data={item}/>
                        </div>
                    )
                })
            } else {
                fsTemplate = <p>К сожалению морских котиков пока нет</p>
            }

            return (
                <div>
                    {fsTemplate}
                </div>
            );
        }
    });

    var App = React.createClass({
        render: function () {
            return (
                <div>
                    <Content data={my_fs}/>
                </div>
            );
        }
    });
    ReactDOM.render(
        <App />,
        document.getElementById('products')
    );
};
var GoToNextPage = function  () {
    GetNextPage();
    setInterval(DrawPage, 500);

};
var GoToPrevious = function () {
    GetPreviousPage();
    setInterval(DrawPage, 500);
};
setInterval(DrawPage, 1000); //хуевое решение, надо timeout сервера
var PageSwitch = React.createClass({
    render: function () {
        return (
            <div>
                <li className="previous">
                    <a onClick={GoToPrevious} href="#">Previous</a>
                </li>
                <li className="next">
                    <a onClick={GoToNextPage} href="#">Next</a>
                </li>
            </div>
        );
    }
});
ReactDOM.render(
    <PageSwitch />,
    document.getElementById('bottomButtons')
);