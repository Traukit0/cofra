<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'cofra_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

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
define( 'AUTH_KEY',         'W]4K0w0c&;g}1!tR(@))%SpJ5{Vd(^~I:CFqtsS|rYs<`~?jSkL5!Iyd&`[PYVNK' );
define( 'SECURE_AUTH_KEY',  '?Y+0P [@^p-%*?N e3~~k|m<8@uR!u3.mKP>Q4dGSwB<=5-u(L-*v=8+Y=4(# {8' );
define( 'LOGGED_IN_KEY',    'TlJdM7pz@a- sR#@wuhC0%PjeX3%Y>YRA$gckz%:sT]atELaKOf{VTAqMn0Z+2#g' );
define( 'NONCE_KEY',        '5I*kZpp&RB{e7/fPD:2_:V_eqy)xW5VS]x2{KDk@ir:V=cp-65c1UXu4>$2-88Pi' );
define( 'AUTH_SALT',        'GZmTMe]jckNj)PA4lmM^N9YdtkYY=[m$%<,Lm6y%c4|NhKeDk=m.f+8X6-[}a9oT' );
define( 'SECURE_AUTH_SALT', 'C(QcW nVJRiTQkX6Ly(Pnc2F@LSD(~o)Z,Q)CQpFnA~b?;ehl L.[CO]SHTOw Z1' );
define( 'LOGGED_IN_SALT',   '1Ot&ID;YO&76*6vf0,4<|53/d4T%R.2]k1,YAaZ1Iwwi~AAP`a<R7dVV`/q7l4wh' );
define( 'NONCE_SALT',       '#e@svy8AGLV1-]a^VZrirNZQI!?@u-vm^*=[%8| )~)-$Li=rO~B5.[6{SbA|,%6' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
