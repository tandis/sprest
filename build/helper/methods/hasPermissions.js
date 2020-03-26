"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Determines if the user has permissions, based on the permission kind value
 */
exports.hasPermissions = function (permissionMask, permissions) {
    if (permissions === void 0) { permissions = []; }
    var hasPermissions = false;
    // Set the permissions
    var requestedPermissions = typeof (permissions) === "number" ? [permissions] : permissions;
    // Ensure the base permissions exist
    if (SP && SP.BasePermissions) {
        // Initialize the base permissions from the value
        var basePermissions = new SP.BasePermissions();
        basePermissions.initPropertiesFromJson(permissionMask);
        // Default the permission flag
        hasPermissions = true;
        // Parse the requested permissions
        for (var i = 0; i < requestedPermissions.length; i++) {
            // See if the user has permissions
            if (!basePermissions.has(requestedPermissions[i])) {
                // Set the flag and break from the loop
                hasPermissions = false;
                break;
            }
        }
    }
    else {
        // Log
        console.info("[gd-sprest] The 'SP' core library is not available.");
    }
    // Return the value
    return hasPermissions;
};
