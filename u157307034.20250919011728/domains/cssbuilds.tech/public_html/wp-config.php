<?php
define( 'WP_CACHE', true );

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u157307034_pOZ2A' );

/** Database username */
define( 'DB_USER', 'u157307034_EIY1M' );

/** Database password */
define( 'DB_PASSWORD', 'gCQHIHzHQT' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'Hj2nT)d 9U)gn ;TX-q4Y*tXzRP81qfDt|62c_0I*;hDtrPr6ebLSE6dA )`bNzR' );
define( 'SECURE_AUTH_KEY',   '3:9SQH3CK?a8c8BN)&=!Hv,jep0V:oxrZ!6@H;tzV{^%t*%G$0%eGhD<MpREpSi.' );
define( 'LOGGED_IN_KEY',     '@jGHOVy;Ra5+0Z%Bw>u5KufLj0/Di:N_pNT$6xJeSeAs3Al?,s#9Ih3T;_){x9GJ' );
define( 'NONCE_KEY',         '3}UEsaOleHV1)Z`Rym ^7E9!c8J)BF<H]Oi8KfH{w$u3%)Pq|l)S8W&3F>qZN}cj' );
define( 'AUTH_SALT',         'DtN??UZJ_8=|M(VNz4U3{lt|E@bA>huJONeST#oh^46D~Uv*w|E+EEirC<aF:@JO' );
define( 'SECURE_AUTH_SALT',  'UzWPm;1Y?h;*W`)z#be-ZI&kS#tlRH?*x2}~Ay55[XqTkCU+3D,K?7TM&x(H?]S$' );
define( 'LOGGED_IN_SALT',    '.zn(~&MT1U)GO!Nmb.GYhGI6&I@>v!Be>SRne,]i3q!RayG}]J=Pd 1/1J`8ZX1m' );
define( 'NONCE_SALT',        'Mv]U2W,A1Lo}mf}nl3&Y_##WAu_Z%zuq;R&mgurH^@u+3U]sJX~c>%;cmVV?Qi<<' );
define( 'WP_CACHE_KEY_SALT', '}R2V;&GTk5]o[(4+0R-XV,l^11}yjyPc}*JhatSoW79=,&,aTqEBgT@]@,kn:p35' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'FS_METHOD', 'direct' );
define( 'COOKIEHASH', '94a3967e1ca953cedc495333f6b88f5b' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
