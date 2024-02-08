
import ApiClient from '../ApiClient';

/**
* The LoginDto model module.
* @module model/LoginDto
* @version 1.0.0
*/
export default class LoginDto {
    /**
    * Constructs a new <code>LoginDto</code>.
    * @alias module:model/LoginDto
    * @class
    * @param deviceId {String} 
    * @param privateKey {String} 
    */

    constructor(deviceId, privateKey) {
        
        
        this['deviceId'] = deviceId;
        this['privateKey'] = privateKey;
        
    }

    /**
    * Constructs a <code>LoginDto</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoginDto} obj Optional instance to populate.
    * @return {module:model/LoginDto} The populated <code>LoginDto</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoginDto();
                        
            
            if (data.hasOwnProperty('deviceId')) {
                obj['deviceId'] = ApiClient.convertToType(data['deviceId'], 'String');
            }
            if (data.hasOwnProperty('privateKey')) {
                obj['privateKey'] = ApiClient.convertToType(data['privateKey'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} deviceId
    */
    'deviceId' = undefined;
    /**
    * @member {String} privateKey
    */
    'privateKey' = undefined;




}
