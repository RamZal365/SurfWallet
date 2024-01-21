# Generated by Django 4.2.1 on 2023-05-11 11:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('SurfWallet', '0003_customuser'),
    ]

    operations = [
        migrations.AddField(
            model_name='spot',
            name='creator',
            field=models.ForeignKey(default=3, on_delete=django.db.models.deletion.CASCADE, related_name='created_spots', to='SurfWallet.customuser'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='surfboard',
            name='fins_material',
            field=models.PositiveIntegerField(choices=[(1, 'Plastic'), (2, 'Wood'), (3, 'Bamboo'), (4, 'Resin'), (5, 'Fiberglass'), (6, 'Other')], null=True),
        ),
        migrations.AddField(
            model_name='surfboard',
            name='material',
            field=models.PositiveIntegerField(choices=[(1, 'Foam'), (2, 'Wood'), (3, 'Epoxy'), (4, 'Polyester'), (5, 'Carbon'), (6, 'Fiberglass'), (7, 'Other')], null=True),
        ),
        migrations.AddField(
            model_name='surfboard',
            name='number_of_fins',
            field=models.PositiveIntegerField(null=True),
        ),
        migrations.AddField(
            model_name='wetsuit',
            name='description',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='wetsuit',
            name='name',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='wetsuit',
            name='owner',
            field=models.ForeignKey(default=3, on_delete=django.db.models.deletion.CASCADE, related_name='owned_wetsuits', to='SurfWallet.customuser'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='spot',
            name='latitude',
            field=models.DecimalField(decimal_places=6, max_digits=9, null=True),
        ),
        migrations.AlterField(
            model_name='spot',
            name='long_description',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='spot',
            name='longitude',
            field=models.DecimalField(decimal_places=6, max_digits=9, null=True),
        ),
        migrations.AlterField(
            model_name='surfboard',
            name='brand',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='surfboard',
            name='description',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='surfboard',
            name='length',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='surfboard',
            name='name',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='surfboard',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='owned_surfboards', to='SurfWallet.customuser'),
        ),
        migrations.AlterField(
            model_name='surfboard',
            name='thickness',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='surfboard',
            name='volume',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='surfboard',
            name='width',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='wetsuit',
            name='brand',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='wetsuit',
            name='chest',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='wetsuit',
            name='chest_thickness',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='wetsuit',
            name='extremities_thickness',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='wetsuit',
            name='height',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='wetsuit',
            name='waist',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='wetsuit',
            name='weight',
            field=models.FloatField(null=True),
        ),
        migrations.CreateModel(
            name='SurfboardImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='surfboard_images/')),
                ('is_cover', models.BooleanField(default=False)),
                ('order', models.PositiveIntegerField(default=0)),
                ('surfboard', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='SurfWallet.surfboard')),
            ],
        ),
    ]
