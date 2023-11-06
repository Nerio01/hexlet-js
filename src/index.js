import _ from 'lodash';

export default (someArray) => {
    const lastOne = _.last(someArray);
    return lastOne;
};
