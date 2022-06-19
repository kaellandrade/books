FROM php:8.0-apache
RUN docker-php-ext-install pdo pdo_mysql bcmath opcache

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN pecl install xdebug \
    && docker-php-ext-enable xdebug