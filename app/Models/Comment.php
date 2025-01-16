<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Comment extends Model
{
    /** @use HasFactory<\Database\Factories\CommentFactory> */
    use HasFactory;

    protected $fillable = ['content', 'post_id', 'user_id'];

    /**
     * Get the attributes for one post
     *
     * @return belongsTo
     */
    public function post(): belongsTo
    {
        return $this->belongsTo(Post::class);
    }

    /**
     * Get the attributes for one user
     *
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
