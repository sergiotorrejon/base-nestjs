export enum loggerMsg {

    // LOGS MESSAGES DATABASE
    SUCCESS_DB_CONNECTION=`DATABASE CONNECTED!!!`,
    FAIL_DB_CONNECTION=`FAILED! CONNECTION TO DATABASE : `,
    
    // LOGS MESSAGES ORMCONFIG
    SUCCESS_ORMCONFIG=`OK! FILE ORMCONFIG `,
    FAIL_ORMCONFIG=`FAILED! FILE ORMCONFIG `,
    
    // LOGS STARTED APPLICATION
    SUCCESS_RUN_APPLICATION='SUCCESS!!! 馃樆 Application is running on: ',
    FAIL_RUN_APPLICATION='ERROR!!! Application is OFFLINE',


    //TODO:----------------------DESDE AQUI REVISAR
    // generic Messages exceptions
    EXCEPTION_BAD_REQUEST = 'La solicitud no se puede completar, existen errores de validaci贸n.',
    EXCEPTION_UNAUTHORIZED = 'Usuario no autorizado',
    EXCEPTION_FORBIDDEN = 'No tienes permisos para realizar la acci贸n sobre el recurso solicitado.',
    EXCEPTION_NOT_FOUND = 'Recurso no encontrado',
    EXCEPTION_PRECONDITION_FAILED = 'La solicitud no cumple una condici贸n previa.',
    EXCEPTION_DEFAULT = 'Ocurrio un error desconocido',
    EXCEPTION_REFRESH_TOKEN_NOT_FOUND = 'Sesi贸n finalizada.',
    EXCEPTION_REFRESH_TOKEN_EXPIRED = 'Sesi贸n expirada por inactividad.',

    // generic messages success
    SUCCESS_DEFAULT = 'ok',
    SUCCESS_LIST = 'Registro(s) obtenido(s) con exito!',
    SUCCESS_CREATE = 'Registro creado con exito!',
    SUCCESS_UPDATE = 'Registro actualizado con exito!',
    SUCCESS_DELETE = 'Registro eliminado con exito!',

    // business logic messages
    SUCCESS_RESTART_PASSWORD = 'Restauraci贸n de contrase帽a exitosa!!!',
    SUCCESS_ACCOUNT_UNLOCK = 'Cuenta desbloqueada exitosamente.',
    INVALID_USER_CREDENTIALS = 'Usuario o contrase帽a invalidos.',
    INVALID_USER = 'El usuario no existe o no contiene un estado valido.',
    INVALID_CREDENTIALS = 'Credenciales incorrectas!!!',
    INACTIVE_USER = 'El usuario se encuentra INACTIVO',
    INVALID_PASSWORD_SCORE = 'La contrase帽a nueva no cumple el nivel de seguridad necesario.',
    USER_BLOCKED = 'Usuario bloqueado por muchos intentos de sesi贸n fallidos, revise su correo electr贸nico.',
    SUBJECT_EMAIL_ACCOUNT_ACTIVE = 'Generaci贸n de credenciales.',
    SUBJECT_EMAIL_ACCOUNT_RESET = 'Restauraci贸n de contrase帽a.',
    SUBJECT_EMAIL_ACCOUNT_LOCKED = 'Bloqueo de cuenta temporal.',
    EXISTING_USER = 'Ya existe un usuario registrado con el mismo n煤mero de documento.',
    EXISTING_EMAIL = 'Ya existe un usuario registrado con el mismo correo electr贸nico.',
}
