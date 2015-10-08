import AnimatedPanel from '..';
import React from 'react';

describe('AnimatedPanel', () => {

  it('should exist', () => {
    AnimatedPanel.should.be.a('function');
  });

  it('renders a component', () => {
    (<AnimatedPanel/>).should.be.an('object');
  });

  it('is a react component', () => {
    (new AnimatedPanel()).should.be.an.instanceOf(React.Component);
  });

  describe('componentDidMount', () => {

    it('calls generateAd', () => {
      // console.log(chai.spy);
      chai.spy.on(AnimatedPanel.prototype, 'generateAd');

      const element = React.createElement(AnimatedPanel);
      element.type.prototype.componentDidMount.call(element);

      element.type.prototype.generateAd
        .should.have.been.called();
    });

    it('adds showElementWhenInView() to scroll event listener', () => {
      chai.spy.on(Object.getPrototypeOf(window), 'addEventListener');

      const element = React.createElement(AnimatedPanel);
      element.componentDidMount();

      window.addEventListener
        .should.have.been.called.with('scroll', element.showElementWhenInView);
    });

    it('adds showElementWhenInView() to resize event listener', () => {
      chai.spy.on(Object.getPrototypeOf(window), 'addEventListener');

      const element = React.createElement(AnimatedPanel);
      element.componentDidMount();

      window.addEventListener
        .should.have.been.called.with('resize', element.showElementWhenInView);
    });

    it('calls showElementWhenInView', () => {
      const element = React.createElement(AnimatedPanel);
      chai.spy.on(element, 'showElementWhenInView');
      element.componentDidMount();

      element.showElementWhenInView
        .should.have.been.called();
    });

  });

  describe('cleanupEventListeners', () => {

    it('removes showElementWhenInView() to scroll event listener', () => {
      chai.spy.on(Object.getPrototypeOf(window), 'removeEventListener');

      const element = React.createElement(AnimatedPanel);
      element.cleanupEventListeners();

      window.removeEventListener
        .should.have.been.called.with('scroll', element.showElementWhenInView);
    });

    it('removes showElementWhenInView() to resize event listener', () => {
      chai.spy.on(Object.getPrototypeOf(window), 'removeEventListener');

      const element = React.createElement(AnimatedPanel);
      element.cleanupEventListeners();

      window.removeEventListener
        .should.have.been.called.with('resize', element.showElementWhenInView);
    });

  });

  describe('componentWillUnmount', () => {

    it('call cleanupEventListeners', () => {
      chai.spy.on(AnimatedPanel.prototype, 'cleanupEventListeners');

      const element = new AnimatedPanel({});
      element.componentWillUnmount();

      element.cleanupEventListeners
        .should.have.been.called();
    });

  });

  describe('showElementWhenInView', () => {


  });

});