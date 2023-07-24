import FastFoodItem from '../FastFoodItem/FastFoodItem';

const FastFoodItems = ({ fastFoodItems }) => {
  return (
    <div className="row">
      {fastFoodItems.map((fastFood) => {
        return (
          <div className="col-md-4 col-sm-6 mb-grid-gutter" key={fastFood.id}>
            <FastFoodItem {...fastFood} />
          </div>
        );
      })}
    </div>
  );
};

export default FastFoodItems;
