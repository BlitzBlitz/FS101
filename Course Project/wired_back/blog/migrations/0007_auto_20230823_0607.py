# Generated by Django 3.2 on 2023-08-23 04:07

import datetime
from django.db import migrations, models
import django.db.models.deletion
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0006_auto_20230823_0528'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, unique=True)),
            ],
        ),
        migrations.AddField(
            model_name='user',
            name='viewed_posts',
            field=models.ManyToManyField(blank=True, related_name='viewed_posts', to='blog.Post'),
        ),
        migrations.AlterField(
            model_name='post',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2023, 8, 23, 4, 7, 7, 600266, tzinfo=utc)),
        ),
        migrations.CreateModel(
            name='PostContent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('paragraph', models.TextField()),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='blog.post')),
            ],
        ),
        migrations.AddField(
            model_name='post',
            name='tags',
            field=models.ManyToManyField(blank=True, related_name='posts_tag', to='blog.Tag'),
        ),
    ]
