

import ApiClient from '../ApiClient';
import CreateGroupDto from './CreateGroupDto';
import SharedGroupUsers from './SharedGroupUsers';
import SharedUsers from './SharedUsers';

/**
* The SdfsAccessControlDto model module.
* @module model/SdfsAccessControlDto
* @version 1.0.0
*/
export default class SdfsAccessControlDto {
    /**
    * Constructs a new <code>SdfsAccessControlDto</code>.
    * @alias module:model/SdfsAccessControlDto
    * @class
    * @param filePath {String} 
    * @param ownerPermission {module:model/SdfsAccessControlDto.OwnerPermissionEnum} 
    * @param OUID {String} 
    * @param fileSize {Number} 
    * @param CID {String} 
    * @param isDirectory {Boolean} 
    * @param sharedUsers {Array.<module:model/SharedUsers>} 
    * @param sharedGroupFiles {Array.<module:model/CreateGroupDto>} 
    * @param sharedGroupUsers {Array.<module:model/SharedGroupUsers>} 
    */

    constructor(filePath, ownerPermission, OUID, fileSize, CID, isDirectory, sharedUsers, sharedGroupFiles, sharedGroupUsers) {
        
        
        this['filePath'] = filePath;
        this['ownerPermission'] = ownerPermission;
        this['OUID'] = OUID;
        this['fileSize'] = fileSize;
        this['CID'] = CID;
        this['isDirectory'] = isDirectory;
        this['sharedUsers'] = sharedUsers;
        this['sharedGroupFiles'] = sharedGroupFiles;
        this['sharedGroupUsers'] = sharedGroupUsers;
        
    }

    /**
    * Constructs a <code>SdfsAccessControlDto</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SdfsAccessControlDto} obj Optional instance to populate.
    * @return {module:model/SdfsAccessControlDto} The populated <code>SdfsAccessControlDto</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SdfsAccessControlDto();
                        
            
            if (data.hasOwnProperty('filePath')) {
                obj['filePath'] = ApiClient.convertToType(data['filePath'], 'String');
            }
            if (data.hasOwnProperty('ownerPermission')) {
                obj['ownerPermission'] = ApiClient.convertToType(data['ownerPermission'], 'String');
            }
            if (data.hasOwnProperty('OUID')) {
                obj['OUID'] = ApiClient.convertToType(data['OUID'], 'String');
            }
            if (data.hasOwnProperty('fileSize')) {
                obj['fileSize'] = ApiClient.convertToType(data['fileSize'], 'Number');
            }
            if (data.hasOwnProperty('CID')) {
                obj['CID'] = ApiClient.convertToType(data['CID'], 'String');
            }
            if (data.hasOwnProperty('isDirectory')) {
                obj['isDirectory'] = ApiClient.convertToType(data['isDirectory'], 'Boolean');
            }
            if (data.hasOwnProperty('sharedUsers')) {
                obj['sharedUsers'] = ApiClient.convertToType(data['sharedUsers'], [SharedUsers]);
            }
            if (data.hasOwnProperty('sharedGroupFiles')) {
                obj['sharedGroupFiles'] = ApiClient.convertToType(data['sharedGroupFiles'], [CreateGroupDto]);
            }
            if (data.hasOwnProperty('sharedGroupUsers')) {
                obj['sharedGroupUsers'] = ApiClient.convertToType(data['sharedGroupUsers'], [SharedGroupUsers]);
            }
        }
        return obj;
    }

    /**
    * @member {String} filePath
    */
    'filePath' = undefined;
    /**
    * @member {module:model/SdfsAccessControlDto.OwnerPermissionEnum} ownerPermission
    */
    'ownerPermission' = undefined;
    /**
    * @member {String} OUID
    */
    'OUID' = undefined;
    /**
    * @member {Number} fileSize
    */
    'fileSize' = undefined;
    /**
    * @member {String} CID
    */
    'CID' = undefined;
    /**
    * @member {Boolean} isDirectory
    */
    'isDirectory' = undefined;
    /**
    * @member {Array.<module:model/SharedUsers>} sharedUsers
    */
    'sharedUsers' = undefined;
    /**
    * @member {Array.<module:model/CreateGroupDto>} sharedGroupFiles
    */
    'sharedGroupFiles' = undefined;
    /**
    * @member {Array.<module:model/SharedGroupUsers>} sharedGroupUsers
    */
    'sharedGroupUsers' = undefined;



    /**
    * Allowed values for the <code>ownerPermission</code> property.
    * @enum {String}
    * @readonly
    */
    static OwnerPermissionEnum = {
        /**
         * value: "OWNER"
         * @const
         */
        "OWNER": "OWNER",
        /**
         * value: "READ WRITE"
         * @const
         */
        "READ WRITE": "READ WRITE",
        /**
         * value: "READ ONLY"
         * @const
         */
        "READ ONLY": "READ ONLY"    };

}
