<?php

/**
 * @file
 * Template overrides as well as (pre-)process and alter hooks for the
 * rspsf theme.
 */
function rspsf_preprocess_html(&$variables) {
  $variables['classes_array'][] = 'loading';
}

function rspsf_preprocess_region(&$variables) {
  $variables['classes_array'][] = 'clearfix';
}
