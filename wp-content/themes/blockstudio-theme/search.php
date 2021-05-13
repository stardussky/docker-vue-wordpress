<?php

/**
 * Search results page
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

$templates = array('pages/search.twig');

$context = Timber::context();
$context['title'] = 'Search results for ' . get_search_query();

Timber::render($templates, $context);
