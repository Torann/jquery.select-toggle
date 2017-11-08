# jQuery Select Toggle

jQuery Select Toggle is a [jQuery](http://jquery.com/) plugin which enables secondary items to be toggled based on a form inputs value.

## Example

```html
<select id="post-status" name="status" data-toggles="2:#schedule-input">
    <option value="1">Published</option>
    <option value="2">Scheduled</option>
    <option value="3">Draft</option>
</select>

<div id="schedule-input" hidden>
    <label for="post-publish-at">
        Schedule
    </label>
    <input type="date" id="post-publish-at" name="publish_at" value="2015-05-01" min="2015-11-08">
</div>
```