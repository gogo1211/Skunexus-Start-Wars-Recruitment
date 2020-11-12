import { useEffect, useState } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

function InputField({ label, isValid, ...props }) {
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">{label}</label>
      </div>
      <div className="field-body">
        <div className="field">
          <p className="control">
            <input className={`input${isValid ? '' : ' is-danger'}`} {...props} />
          </p>
          {!isValid && <p className="help is-danger">This field is invalid</p>}
        </div>
      </div>
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  isValid: PropTypes.bool
};

function SelectField({ label, items, isValid, ...props }) {
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">{label}</label>
      </div>
      <div className="field-body">
        <div className="field">
          <div className="control is-expanded">
            <div className="select is-fullwidth">
              <select {...props}>
                <option value="">None</option>
                {items.map(({ label, value }, index) => (
                  <option key={index} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {!isValid && <p className="help is-danger">This field is invalid</p>}
        </div>
      </div>
    </div>
  );
}

SelectField.propTypes = {
  label: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  )
};

export default function PlanetForm({ planet: init, onSubmit, onCancel }) {
  const initValidation = {
    name: true,
    rotation_period: true,
    orbital_period: true,
    diameter: true,
    climate: true,
    gravity: true,
    terrain: true,
    surface_water: true
  };
  const [planet, setPlanet] = useState(init);
  const [valid, setValid] = useState(initValidation);

  useEffect(() => {
    setPlanet(init);
    setValid(initValidation);
  }, [init]);

  const handleChange = (e, type) => {
    setValid({ ...valid, [type]: true });
    setPlanet({
      ...planet,
      [type]: e.target.value
    });
  };

  const handleSubmit = () => {
    let validation = {};
    _.keys(planet).forEach((key) => {
      validation = { ...validation, [key]: !!planet[key] };
    });
    setValid(validation);
    if (_.values(validation).every((item) => item)) {
      onSubmit(planet);
    }
  };

  return (
    <fieldset>
      <InputField
        type="text"
        label="Name"
        value={planet.name}
        isValid={valid.name}
        onChange={(e) => handleChange(e, 'name')}
      />
      <InputField
        type="number"
        label="Rotation Period"
        value={planet.rotation_period}
        isValid={valid.rotation_period}
        onChange={(e) => handleChange(e, 'rotation_period')}
      />
      <InputField
        type="number"
        label="Orbital Period"
        value={planet.orbital_period}
        isValid={valid.orbital_period}
        onChange={(e) => handleChange(e, 'orbital_period')}
      />
      <InputField
        type="number"
        label="Diameter"
        value={planet.diameter}
        isValid={valid.diameter}
        onChange={(e) => handleChange(e, 'diameter')}
      />
      <InputField
        type="text"
        label="Climate"
        value={planet.climate}
        isValid={valid.climate}
        onChange={(e) => handleChange(e, 'climate')}
      />
      <InputField
        type="text"
        label="Gravity"
        value={planet.gravity}
        isValid={valid.gravity}
        onChange={(e) => handleChange(e, 'gravity')}
      />
      <SelectField
        label="Terrain"
        value={planet.terrain}
        isValid={valid.terrain}
        onChange={(e) => handleChange(e, 'terrain')}
        items={[
          { value: 'desert', label: 'Desert' },
          { value: 'forests', label: 'Forests' },
          { value: 'mountains', label: 'Mountains' },
          { value: 'lakes', label: 'Lakes' }
        ]}
      />
      <InputField
        type="number"
        label="Surface Water"
        value={planet.surface_water}
        isValid={valid.surface_water}
        onChange={(e) => handleChange(e, 'surface_water')}
      />
      <div className="field is-grouped is-grouped-centered">
        <p className="control">
          <button className="button is-primary" onClick={handleSubmit}>
            Submit
          </button>
        </p>
        <p className="control">
          <button className="button is-light" onClick={onCancel}>
            Cancel
          </button>
        </p>
      </div>
    </fieldset>
  );
}

PlanetForm.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string,
    rotation_period: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    orbital_period: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    diameter: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    climate: PropTypes.string,
    gravity: PropTypes.string,
    terrain: PropTypes.string,
    surface_water: PropTypes.oneOf([PropTypes.string, PropTypes.number])
  })
};
