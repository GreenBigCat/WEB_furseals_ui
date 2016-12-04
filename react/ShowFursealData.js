var DrawAll = function () {
    var fsData = fursealData;
    var CreateFurSealData = React.createClass({
        propTypes: {
            data: React.PropTypes.shape({
                id: React.PropTypes.number.isRequired,
                lifestyle: React.PropTypes.string.isRequired,
                height: React.PropTypes.number.isRequired,
                weight: React.PropTypes.number.isRequired,
                hobby: React.PropTypes.string.isRequired,
                country: React.PropTypes.string.isRequired
            })
        },
        render: function () {
            var id = this.props.data.id,
                height = this.props.data.height,
                hobby = this.props.data.hobby,
                lifestyle = this.props.data.lifestyle,
                weight = this.props.data.weight,
                country = this.props.data.country;
            return (
                <div>
                    <ul className="list-group">
                        <li className="list-group-item"> Номер: {id}</li>
                        <li className="list-group-item"> Страна: {country}</li>
                        <li className="list-group-item"> Вес: {weight}</li>
                        <li className="list-group-item"> Рост: {height}</li>
                        <li className="list-group-item"> Хобби: {hobby}</li>
                        <li className="list-group-item">Кто по жизни: {lifestyle}</li>
                    </ul>
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
                            <CreateFurSealData data={item}/>
                        </div>
                    )
                })
            } else {
                fsTemplate = <p>К сожалению у котика нет данных</p>
            }

            return (
                <div className='news'>
                    {fsTemplate}
                </div>
            );
        }
    });

    var App = React.createClass({
        render: function () {
            return (
                <div className='app'>
                    <Content data={fsData}/>
                </div>
            );
        }
    });
    ReactDOM.render(
        <App />,
        document.getElementById('fursealData')
    );


    var FursealName = React.createClass({
        propTypes: {
            data: React.PropTypes.shape({
                name: React.PropTypes.string.isRequired
            })
        },
        render: function () {
            var name = this.props.data.name;
            return (
                <h1 className="page-title">{name}</h1>

            );
        }
    });
    var Name = React.createClass({
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
                            <FursealName data={item}/>
                        </div>
                    )
                })
            } else {
                fsTemplate = <p>Этого котика еще не назвали</p>
            }

            return (
                <div>
                    {fsTemplate}
                </div>
            );
        }
    });

    var DrawName = React.createClass({
        render: function () {
            return (
                <div className='app'>
                    <Name data={fsData}/>
                </div>
            );
        }
    });
    ReactDOM.render(
        <DrawName />,
        document.getElementById('fsName')
    );
};
setInterval(DrawAll, 500);