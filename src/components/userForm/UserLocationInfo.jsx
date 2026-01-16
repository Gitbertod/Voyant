import {
  CountrySelect,
  StateSelect,
  CitySelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

export function UserLocationInfo({ 
  form, 
  handleCountryChange, 
  handleStateChange, 
  handleCityChange,
  countryId,
  stateId 
}) {
  return (
    <>
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-3">
        Ubicación
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Selector de País */}
        <div>
          <label className="block text-sm font-semibold">País</label>
          <CountrySelect
            onChange={handleCountryChange}
            placeHolder="Selecciona un país"
            defaultValue={countryId ? { id: countryId, name: form.country } : null}
            showFlag={true}
            containerClassName="w-full"
            inputClassName="border rounded-lg px-3 py-2 w-full text-sm"
          />
        </div>

        {/* Selector de Estado */}
        <div>
          <label className="block text-sm font-semibold">Estado/Provincia</label>
          <StateSelect
            countryid={countryId}
            onChange={handleStateChange}
            placeHolder="Selecciona un estado"
            defaultValue={stateId ? { id: stateId, name: form.state } : null}
            containerClassName="w-full"
            inputClassName="border rounded-lg px-3 py-2 w-full text-sm"
            disabled={!countryId}
          />
        </div>

        {/* Selector de Ciudad */}
        <div>
          <label className="block text-sm font-semibold">Ciudad</label>
          <CitySelect
            countryid={countryId}
            stateid={stateId}
            onChange={handleCityChange}
            placeHolder="Selecciona una ciudad"
            defaultValue={form.city ? { name: form.city } : null}
            containerClassName="w-full"
            inputClassName="border rounded-lg px-3 py-2 w-full text-sm"
            disabled={!stateId}
          />
        </div>
      </div>
    </>
  );
}