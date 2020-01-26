UPDATE TABLE memes
SET (url, title) = ($2, $3)
WHERE id = $1;