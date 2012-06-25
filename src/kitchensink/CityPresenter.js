goog.provide('nx.CityPresenter');

goog.require('goog.dom');
goog.require('nx.City');
goog.require('nx.CityView');
goog.require('nx.Event');
goog.require('nx.Presenter');

/**
 * @param {nx.View} view
 * @param {nx.Ctx} ctx
 * @constructor
 * @extends {nx.Presenter}
 */
nx.CityPresenter = function (view, ctx) {
    goog.base(this, view, ctx);
};
goog.inherits(nx.CityPresenter, nx.Presenter);
//-----------

/**
 * @return {nx.Presenter}
 */
nx.CityPresenter.prototype.init = function () {
//    var city = new nx.City('Sofia', 02, 234);


    var d = {cities:[
        'Andorra la Vella12',
        'Budapest',
        'Baile Atha Cliath',
        'Danzig',
        'Den Haag',
        'Helsingfors',
        'Kobenhavn',
        'Letzebuerg',
        'Lisboa',
        'Podgorica',
        'Praha',
        'Saint-Tropez',
        'Sofia',
        'Tallinn',
        'Tinahely',
        'Wien'
    ]};
    this.view_.setData(d);
    return this;
};

/**
 */
nx.CityPresenter.prototype.executeClick = function () {
    log('nx.CityPresenter::executeClick >');

    this.ctx_.getEventBus().fire(nx.Event.CITY_TAB_CLICK, {'b':1});
};
