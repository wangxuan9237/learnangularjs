# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-20 02:35
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='BlogDetail',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('body', models.TextField()),
                ('comment', models.TextField()),
            ],
        ),
        migrations.RemoveField(
            model_name='blog',
            name='body',
        ),
        migrations.AddField(
            model_name='blogdetail',
            name='blog',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='blog_detail', to='blog.Blog'),
        ),
    ]