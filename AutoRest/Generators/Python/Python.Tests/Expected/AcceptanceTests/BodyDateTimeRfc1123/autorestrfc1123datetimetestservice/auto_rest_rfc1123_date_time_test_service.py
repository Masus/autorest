# coding=utf-8
# --------------------------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See License.txt in the project root for
# license information.
#
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.service_client import ServiceClient
from msrest import Configuration, Serializer, Deserializer
from .operations.datetimerfc1123 import Datetimerfc1123
from . import models


class AutoRestRFC1123DateTimeTestServiceConfiguration(Configuration):
    """Configuration for AutoRestRFC1123DateTimeTestService
    Note that all parameters used to create this instance are saved as instance
    attributes.

    :param str base_url: Service URL
    :param str filepath: Existing config
    """

    def __init__(
            self, base_url=None, filepath=None):

        if not base_url:
            base_url = 'https://localhost'

        super(AutoRestRFC1123DateTimeTestServiceConfiguration, self).__init__(base_url, filepath)

        self.add_user_agent('autorestrfc1123datetimetestservice/1.0.0')


class AutoRestRFC1123DateTimeTestService(object):
    """Test Infrastructure for AutoRest

    :param config: Configuration for client.
    :type config: AutoRestRFC1123DateTimeTestServiceConfiguration

    :ivar datetimerfc1123: Datetimerfc1123 operations
    :vartype datetimerfc1123: .operations.Datetimerfc1123
    """

    def __init__(self, config):

        self._client = ServiceClient(None, config)

        client_models = {k: v for k, v in models.__dict__.items() if isinstance(v, type)}
        self._serialize = Serializer()
        self._deserialize = Deserializer(client_models)

        self.config = config
        self.datetimerfc1123 = Datetimerfc1123(
            self._client, self.config, self._serialize, self._deserialize)