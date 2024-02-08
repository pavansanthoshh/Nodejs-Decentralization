

import ApiClient from '../ApiClient';

/**
* The AddGroupDto model module.
* @module model/AddGroupDto
* @version 1.0.0
*/
export default class AddGroupDto {
    /**
    * Constructs a new <code>AddGroupDto</code>.
    * @alias module:model/AddGroupDto
    * @class
    * @param GUID {String} 
    */

    constructor(GUID) {
        
        
        this['GUID'] = GUID;
        
    }

    /**
    * Constructs a <code>AddGroupDto</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AddGroupDto} obj Optional instance to populate.
    * @return {module:model/AddGroupDto} The populated <code>AddGroupDto</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddGroupDto();
                        
            
            if (data.hasOwnProperty('GUID')) {
                obj['GUID'] = ApiClient.convertToType(data['GUID'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} GUID
    */
    'GUID' = undefined;




}
